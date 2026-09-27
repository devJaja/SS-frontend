"use client";

import { useParams } from "next/navigation";
import { InvoiceDetailView } from "@/components/invoices/InvoiceDetailView";

/**
 * Marketplace deep link to an invoice. Renders the same view as the canonical
 * `/invoices/[id]` route so links from the grid, notifications and
 * notifications' "listing sold" events all land on one implementation.
 */
export default function MarketplaceInvoiceDetailPage() {
  const params = useParams<{ id: string }>();

  return (
    <main className="container mx-auto px-4 py-8 pb-24">
      <InvoiceDetailView invoiceId={params.id} />
    </main>
  );
}
