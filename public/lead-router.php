<?php
/**
 * GLOBIFY.AE - Custom Lead Router
 * This script accepts JSON POST requests from the Next.js frontend,
 * sends emails via the secure Resend API, and forwards the lead to the Custom CRM.
 */

// 1. CORS Headers (Security: Only allow requests from your domain)
header("Access-Control-Allow-Origin: https://globify.ae");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Configuration Variables (Replace these strings with your actual keys!)
$resend_api_key = "re_bhc4Lhfy_89yTYD8XgdbqzQq3uNnVP3ys";
$sales_email    = "sales@globify.in";
$noreply_email  = "noreply@globify.ae"; // The verified domain in Resend

// 3. Read the incoming JSON payload from Next.js
$raw_data = file_get_contents("php://input");
$data = json_decode($raw_data, true);

if (!$data || !isset($data['fields'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid Payload"]);
    exit();
}

$formName = $data['formName'] ?? 'Website Form Submission';
$fields = $data['fields'];

// 4. Honeypot Anti-Spam Check
if (!empty($fields['_phone_extension'])) {
    // Bot detected. Return silent success to trap them.
    http_response_code(200);
    echo json_encode(["success" => true]);
    exit();
}

// Try to gracefully find the user's email for the auto-reply
$client_email = null;
$client_name = "There";
foreach ($fields as $key => $value) {
    if (stripos($key, 'email') !== false && filter_var($value, FILTER_VALIDATE_EMAIL)) {
        $client_email = $value;
    }
    if (stripos($key, 'name') !== false) {
        $client_name = $value;
    }
}

// Format the HTML body for the Sales Team Email
$html_table = "<h2>New Lead: " . htmlspecialchars($formName) . "</h2><ul>";
foreach ($fields as $key => $value) {
    $html_table .= "<li><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($value) . "</li>";
}
$html_table .= "</ul>";

// --- Function to Trigger the Resend API ---
function sendResendEmail($to, $subject, $htmlBody) {
    global $resend_api_key, $noreply_email;
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $resend_api_key",
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        "from" => "Globify <$noreply_email>",
        "to" => [$to],
        "subject" => $subject,
        "html" => $htmlBody
    ]));
    $res = curl_exec($ch);
    curl_close($ch);
    return $res;
}

// --- ACTION A: Email the Sales Team ---
sendResendEmail($sales_email, "[Globify.ae] 🚨 New Website Lead: $formName", $html_table);

// --- ACTION B: Send Auto-Reply to the Client ---
if ($client_email) {
    $auto_reply_html = "
        <h3>Hi $client_name,</h3>
        <p>Thank you for reaching out to Globify regarding '$formName'.</p>
        <p>We have successfully received your request. One of our specialists will review your details and get back to you within 24 hours.</p>
        <br>
        <p>Best Regards,</p>
        <p><strong>The Globify Team</strong><br>globify.ae</p>
    ";
    sendResendEmail($client_email, "We've received your request! - Globify", $auto_reply_html);
}

// Return Success to Next.js Frontend
http_response_code(200);
echo json_encode(["success" => true]);
?>
