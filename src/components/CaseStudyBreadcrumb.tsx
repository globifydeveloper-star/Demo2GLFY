"use client";

import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CaseStudyBreadcrumbProps {
  name: string;
}

const CaseStudyBreadcrumb = ({ name }: CaseStudyBreadcrumbProps) => (
  <Breadcrumb className="mb-6">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/" className="text-white/40 hover:text-primary">Home</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="text-white/20" />
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/projects" className="text-white/40 hover:text-primary">Projects</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="text-white/20" />
      <BreadcrumbItem>
        <BreadcrumbPage className="text-white/70">{name}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default CaseStudyBreadcrumb;
