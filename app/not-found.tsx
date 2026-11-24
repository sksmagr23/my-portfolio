import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonClasses } from './components/ide/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-workspace-blue text-[#E6EDF3] flex items-center justify-center p-6">
      <div className="w-full max-w-md ide-panel border-t-[3px] border-t-[#58B4EE] p-6 space-y-4">
        <div className="text-4xl font-bold text-[#58B4EE]">404</div>
        <h1 className="text-lg font-bold text-[#E6EDF3]">Page Not Found</h1>
        <p className="text-sm text-[#94A3B8]">
          The requested route does not exist in this portfolio.
        </p>
        <Link href="/" className={buttonClasses('primary', 'md')}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}
