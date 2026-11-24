import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonClasses } from './components/ide/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-workspace-blue text-theme-text flex items-center justify-center p-6">
      <div className="w-full max-w-md ide-panel border-t-[3px] border-t-theme-accent p-6 space-y-4">
        <div className="text-4xl font-bold text-theme-accent">404</div>
        <h1 className="text-lg font-bold text-theme-text">Page Not Found</h1>
        <p className="text-sm text-theme-textMuted">
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
