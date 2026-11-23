import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonClasses } from './components/ide/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1F25] text-[#E6EDF3] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-lg bg-[#24262E] border border-[#3B4353] p-6 space-y-4">
        <div className="text-4xl font-bold text-[#58B4FF]">404</div>
        <h1 className="text-lg font-bold text-[#E6EDF3]">Page Not Found</h1>
        <p className="text-sm text-[#94A3B8]">
          The requested route does not exist in this portfolio workspace.
        </p>
        <Link href="/" className={buttonClasses('primary', 'md')}>
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Workspace</span>
        </Link>
      </div>
    </div>
  );
}
