import Link from "next/link";
import { redirect } from "next/navigation";

import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ResumePage() {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK;

  if (resumeLink) {
    redirect(resumeLink);
  }

  return (
    <PageContainer
      title="Resume"
      description="Resume link is not configured yet."
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          Add NEXT_PUBLIC_RESUME_LINK to your environment variables to enable
          the resume redirect.
        </p>
        <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
          Go Home
        </Link>
      </div>
    </PageContainer>
  );
}
