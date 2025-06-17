"use client";
import React, { useState } from "react";
import ConfirmSeed from "./confirmSeed";
import SeedStatus from "./SeedStatus";
import { useDummyDataContext } from "@/Context/DummyDataContext";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SeedModal({ open, onClose }: ModalProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState<boolean | null>(null);
  const { setIsSeeded } = useDummyDataContext();

  const handleConfirm = () => {
    setIsConfirming(true);
    setShowStatus(false);

    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success/failure
      setSeedSuccess(success);
      setIsSeeded(true);
      setIsConfirming(false);
      setShowStatus(true);
    }, 2000);
  };

  const handleClose = () => {
    // Reset states when modal closes
    if (isConfirming) return;
    setIsConfirming(false);
    setShowStatus(false);
    setSeedSuccess(null);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />

      {/* Modal Panel */}
      <div
        className={`fixed bottom-16 md:bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ boxShadow: "0px -12px 28px 0px #00000073" }}
      >
        <div
          className={`relative bg-[#1e1e2f] rounded-t-2xl p-2 border-t-[1px] border-[#866692 text-white shadow-xl overflow-hidden`}
        >
          <div
            className={`w-40 h-30 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-full opacity-80 blur-3xl pointer-events-none transition-colors duration-500 ${
              isConfirming
                ? "bg-cyan-500"
                : showStatus
                  ? seedSuccess
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-[#866692]"
            }`}
          />

          <div className="relative z-10">
            <div
              className={`w-12 h-1 rounded-full mx-auto mb-4 mt-2 ${
                isConfirming
                  ? "bg-cyan-500"
                  : showStatus
                    ? seedSuccess
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-[#866692]"
              }`}
            />
            <div className="rounded-3xl p-3 w-full">
              {isConfirming || showStatus ? (
                <SeedStatus
                  success={isConfirming ? null : seedSuccess}
                  onClose={handleClose}
                  isConfirming={isConfirming} // pass this
                />
              ) : (
                <ConfirmSeed
                  handleConfirm={handleConfirm}
                  isConfirming={isConfirming}
                  onClose={handleClose}
                  open={open}
                  setIsConfirming={setIsConfirming}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
