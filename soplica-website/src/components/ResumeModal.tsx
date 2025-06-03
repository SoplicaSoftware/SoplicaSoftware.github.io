import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import {
  Download,
  ExternalLink,
  FileText,
  Smartphone,
  Monitor,
} from "lucide-react";
import QRCode from "react-qr-code";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const resumeFileName = "Kacper-Rogóż-Resume-20250603-1.pdf";
  const resumeUrl = `/${resumeFileName}`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.origin + resumeUrl);
    }
  }, [resumeUrl]);

  const handleDirectDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = `/${resumeFileName}`;
    link.download = resumeFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInBrowser = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="2xl"
      scrollBehavior="inside"
      classNames={{
        base: "bg-background/95 backdrop-blur-md border border-divider",
        header: "border-b border-divider",
        footer: "border-t border-divider",
      }}
    >
      <ModalContent>        <ModalHeader className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Download Resume
              </h2>
              <p className="text-sm text-foreground-500">
                Kacper Rogóż - Software Engineer
              </p>
            </div>
          </div>
        </ModalHeader>

        <ModalBody className="py-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Download Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Download Options
              </h3>
              
              {/* Direct Download Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border border-divider hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardBody 
                    className="p-4"
                    onClick={handleDirectDownload}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-success/10 border border-success/20">
                        <Download className="w-5 h-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          Direct Download
                        </h4>
                        <p className="text-sm text-foreground-500">
                          Download PDF file directly
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-foreground-400" />
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* View in Browser Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border border-divider hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardBody 
                    className="p-4"
                    onClick={handleViewInBrowser}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Monitor className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          View in Browser
                        </h4>
                        <p className="text-sm text-foreground-500">
                          Open PDF in new tab
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-foreground-400" />
                    </div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* File Info */}
              <Card className="bg-content2/30 border border-divider">
                <CardBody className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground-600">File Type:</span>
                      <span className="text-sm font-medium text-foreground">PDF</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground-600">Last Updated:</span>
                      <span className="text-sm font-medium text-foreground">June 4, 2025</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground-600">Direct Link:</span>
                      <span className="text-sm font-medium text-primary">
                        {window.location.origin}/{resumeFileName}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* QR Code Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-foreground-600" />
                <h3 className="text-lg font-medium text-foreground">
                  Scan with Mobile
                </h3>
              </div>
              
              <Card className="border border-divider">
                <CardBody className="p-6 flex flex-col items-center">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <QRCode
                      value={currentUrl}
                      size={160}
                      level="M"
                    />
                  </div>
                  <Divider className="my-4" />
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Scan to access resume
                    </p>
                    <p className="text-xs text-foreground-500">
                      Opens directly in mobile browser
                    </p>
                  </div>
                </CardBody>
              </Card>

              <div className="text-center">
                <p className="text-xs text-foreground-400">
                  QR code links to: 
                </p>
                <p className="text-xs text-primary break-all">
                  {currentUrl}
                </p>
              </div>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="light"
            onPress={onClose}
            className="text-foreground-600 px-6 py-2"
            size="lg"
          >
            Close
          </Button>
          <Button
            color="primary"
            startContent={<Download size={18} />}
            onPress={handleDirectDownload}
            className="font-semibold"
            size="lg"
          >
            Download Now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResumeModal;
