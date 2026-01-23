import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
  title?: string;
  message?: string;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetError,
  title = "Something went wrong",
  message = "This component encountered an error. Please try again.",
}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 mx-auto bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-muted-foreground text-sm">{message}</p>

        {resetError && (
          <Button onClick={resetError} size="sm" variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}

        {import.meta.env.DEV && error && (
          <details className="text-left mt-4">
            <summary className="cursor-pointer text-xs font-medium text-muted-foreground">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-muted-foreground mt-2 whitespace-pre-wrap bg-muted p-2 rounded">
              {error.message}
            </pre>
          </details>
        )}
      </CardContent>
    </Card>
  );
};