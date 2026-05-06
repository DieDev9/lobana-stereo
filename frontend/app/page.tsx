import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { HistorySection } from "@/components/history-section";
import { AnnouncersSection } from "@/components/announcers-section";
import { NewsSection } from "@/components/news-section";
import { ScheduleSection } from "@/components/schedule-section";
// import { AdsSection } from "@/components/ads-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HistorySection />
      <AnnouncersSection />
      <NewsSection />
      <ScheduleSection />
      {/* <AdsSection /> */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}