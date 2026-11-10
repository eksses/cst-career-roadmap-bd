import React, { Component, type ReactNode } from 'react';
import { RotateCcw, AlertTriangle, Compass } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Unhandled CST Runtime Error:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public handleStartFresh = () => {
    try {
      localStorage.removeItem('cst_save_code');
      sessionStorage.clear();
    } catch (e) {}
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 stroke-[2]" />
          </div>
          <h2 className="text-xl font-bold text-[#141413] mb-2">
            রোডম্যাপ লোড করতে সাময়িক সমস্যা হয়েছে
          </h2>
          <p className="text-xs text-[#575653] max-w-md mb-4 leading-relaxed">
            তোমার নির্বাচিত রোডম্যাপের ডেটা লোড করতে একটি ব্রাউজার রেন্ডারিং সমস্যা হয়েছে। নিচে থাকা বাটন দিয়ে সরাসরি রোডম্যাপ পুনরায় শুরু করো।
          </p>

          {this.state.error && (
            <div className="mb-6 p-3 bg-[#FAF9F5] border border-[#E5E4DF] rounded-xl text-left max-w-md w-full">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#C84B31] mb-1">
                ত্রুটির বিবরণ (Diagnostic Error):
              </div>
              <p className="text-[11px] font-mono text-[#575653] break-all leading-relaxed">
                {this.state.error.message || String(this.state.error)}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleStartFresh}
              className="px-4 py-2.5 bg-[#C84B31] hover:bg-[#B33E26] text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Compass className="w-4 h-4 stroke-[2]" />
              <span>নতুন করে রোডম্যাপ নির্বাচন করো (Choose Roadmap)</span>
            </button>

            <button
              onClick={this.handleReset}
              className="px-4 py-2.5 bg-[#141413] hover:bg-[#2A2927] text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4 stroke-[2]" />
              <span>কনসোল রিলোড করুন (Reload Page)</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
