"use client";

import { createContext, useContext, useState } from "react";
import { Toast } from "@/components/Toast";

type ToastType = {
  id: string;
  heading: string;
  message: string;
  type: "error" | "processing" | "done";
  duration?: number;
};

type ToastContextType = {
  toast: (options: Omit<ToastType, "id">) => void;
  dismissAll: () => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const toast = ({
    heading,
    message,
    type,
    duration = 3000,
  }: Omit<ToastType, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, heading, message, type, duration }]);

    if (type !== "processing") {
      setTimeout(() => {
        dismiss(id);
      }, duration);
    }
  };

  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const dismissAll = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toast, dismissAll }}>
      {children}
      <div className="fixed top-0 right-0 z-[1000] p-4 space-y-4">
        {toasts.map(toastItem => (
          <Toast
            key={toastItem.id}
            heading={toastItem.heading}
            message={toastItem.message}
            type={toastItem.type}
            duration={toastItem.duration}
            onClose={() => dismiss(toastItem.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const useToastHelpers = () => {
  const { toast } = useToast();

  const showError = (heading: string, message: string, duration?: number) => {
    toast({ type: "error", heading, message, duration });
  };

  const showSuccess = (heading: string, message: string, duration?: number) => {
    toast({ type: "done", heading, message, duration });
  };

  const showProcessing = (heading: string, message: string) => {
    toast({ type: "processing", heading, message, duration: 0 });
  };

  return { showError, showSuccess, showProcessing };
};
