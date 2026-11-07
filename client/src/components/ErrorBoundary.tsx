import React, { Component, type ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

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
          <p className="text-xs text-[#575653] max-w-md mb-6 leading-relaxed">
            There was a temporary rendering issue loading this track. Please reset the console to refresh state.
          </p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2.5 bg-[#141413] text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#2A2927] transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-4 h-4 stroke-[2]" />
            <span>কনসোল রিলোড করুন (Reload Console)</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
