import jsPDF from "jspdf";
import { getSessionItem } from "./storage";

interface ApplicationData {
  applicationId: string;
  merchantId?: number;
  applicantName: string;
  role?: string;
  company?: string;
  email?: string;
  companyProfile?: {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postal?: string;
    country?: string;
    phone?: string;
    turnover?: string;
    website?: string;
    product?: string;
    industry?: string;
    socials?: string[];
  };
  businessInfo?: {
    crn?: string;
    vat?: string;
    businessType?: string;
  };
  documents?: {
    name: string;
    size: number;
    type: string;
  }[];
}

export function generateApplicationPDF(
  applicationId: string,
  applicantName: string,
): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const data: ApplicationData = {
    applicationId,
    applicantName,
    role: getSessionItem<string>("onboarding_role") || undefined,
    company: getSessionItem<string>("onboarding_company") || undefined,
    email: getSessionItem<string>("onboarding_email") || undefined,
    merchantId: getSessionItem<number>("merchant_id") || undefined,
    companyProfile:
      getSessionItem<ApplicationData["companyProfile"]>("companyProfileForm") ||
      undefined,
    businessInfo:
      getSessionItem<ApplicationData["businessInfo"]>("businessInfoForm") ||
      undefined,
    documents:
      getSessionItem<ApplicationData["documents"]>("documentsForm_uk") ||
      undefined,
  };

  doc.setFillColor(0, 51, 89);
  doc.rect(0, 0, pageWidth, 40, "F");

  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text("Application Summary", pageWidth / 2, 25, { align: "center" });

  let yPos = 50;

  const createSectionBox = (title: string, startY: number, height: number) => {
    const margin = 20;
    const width = pageWidth - margin * 2;

    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(248, 249, 250);
    doc.rect(margin + 2, startY + 2, width, height, "F");

    doc.setDrawColor(0, 51, 89);
    doc.setFillColor(255, 255, 255);
    doc.rect(margin, startY, width, height, "FD");

    doc.setFillColor(0, 51, 89);
    doc.rect(margin, startY, width, 12, "F");

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(title, margin + 5, startY + 8);

    return startY + 20;
  };

  const addField = (label: string, value: string, yPosition: number) => {
    const margin = 25;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);

    doc.setFont("helvetica", "bold");
    doc.text(label, margin, yPosition);

    doc.setFont("helvetica", "normal");
    doc.text(value || "-", margin + 95, yPosition);

    return yPosition + 8;
  };

  let contentYPos = createSectionBox("Basic Information", yPos, 72);

  contentYPos = addField("Application ID:", data.applicationId, contentYPos);
  contentYPos = addField(
    "Merchant ID:",
    data.merchantId ? String(data.merchantId) : "",
    contentYPos,
  );
  contentYPos = addField("Applicant Name:", data.applicantName, contentYPos);
  contentYPos = addField("Email:", data.email || "", contentYPos);
  contentYPos = addField("Role:", data.role || "", contentYPos);
  contentYPos = addField("Company:", data.company || "", contentYPos);
  contentYPos = addField("Date:", new Date().toLocaleDateString(), contentYPos);

  yPos = contentYPos + 15;

  if (data.companyProfile) {
    const profile = data.companyProfile;
    contentYPos = createSectionBox("Company Profile", yPos, 90);

    contentYPos = addField("Address:", formatAddress(profile), contentYPos);
    contentYPos = addField("Phone:", profile.phone || "", contentYPos);
    contentYPos = addField("Website:", profile.website || "", contentYPos);
    contentYPos = addField("Industry:", profile.industry || "", contentYPos);
    contentYPos = addField(
      "Annual Turnover:",
      profile.turnover || "",
      contentYPos,
    );
    contentYPos = addField("Product:", profile.product || "", contentYPos);

    if (profile.socials?.length) {
      contentYPos = addField(
        "Social Links:",
        profile.socials.join(", "),
        contentYPos,
      );
    }

    yPos = contentYPos + 15;
  }

  if (data.businessInfo) {
    const business = data.businessInfo;
    contentYPos = createSectionBox("Business Information", yPos, 45);

    contentYPos = addField(
      "Company Registration Number:",
      business.crn || "",
      contentYPos,
    );
    contentYPos = addField("VAT Number:", business.vat || "", contentYPos);
    contentYPos = addField(
      "Business Type:",
      business.businessType || "",
      contentYPos,
    );

    yPos = contentYPos + 15;
  }

  if (data.documents?.length) {
    const docsHeight = data.documents.length * 10 + 20;
    contentYPos = createSectionBox("Uploaded Documents", yPos, docsHeight);

    data.documents.forEach((document) => {
      contentYPos = addField(
        `${formatDocumentType(document.type)}:`,
        `${document.name} (${formatFileSize(document.size)})`,
        contentYPos,
      );
    });

    yPos = contentYPos + 15;
  }

  const footerHeight = 40;

  doc.setFillColor(0, 51, 89);
  doc.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, "F");

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);

  doc.setFont("helvetica", "bold");
  doc.text("PayIntelli Ltd", 20, pageHeight - footerHeight + 15);

  doc.setFont("helvetica", "normal");
  doc.text(
    "123 Finance Street, London, UK",
    20,
    pageHeight - footerHeight + 25,
  );

  doc.text(
    "support@payintelli.com",
    pageWidth / 2,
    pageHeight - footerHeight + 15,
    {
      align: "center",
    },
  );

  doc.text(
    "www.payintelli.com",
    pageWidth / 2,
    pageHeight - footerHeight + 25,
    {
      align: "center",
    },
  );

  const timestamp = new Date().toLocaleString();
  doc.text("Generated:", pageWidth - 90, pageHeight - footerHeight + 15);
  doc.text(timestamp, pageWidth - 90, pageHeight - footerHeight + 25);

  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);

  doc.line(
    pageWidth / 3,
    pageHeight - footerHeight + 10,
    pageWidth / 3,
    pageHeight - 10,
  );

  doc.line(
    (2 * pageWidth) / 3,
    pageHeight - footerHeight + 10,
    (2 * pageWidth) / 3,
    pageHeight - 10,
  );

  doc.save(`Application-${applicationId}.pdf`);
}

function formatAddress(profile: ApplicationData["companyProfile"]): string {
  if (!profile) return "";

  const parts = [
    profile.address1,
    profile.address2,
    profile.city,
    profile.state,
    profile.postal,
    profile.country,
  ].filter(Boolean);

  return parts.join(", ");
}

function formatDocumentType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}
