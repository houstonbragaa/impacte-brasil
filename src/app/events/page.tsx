import Header from "@/components/common/header";
import styles from "@/app/styles.module.css";
import Footer from "@/components/common/footer";
import Main from "@/components/events/main";
import Gira from "@/components/events/gira";
import Operations from "@/components/events/operations";
import VideoTestemonial from "@/components/events/video-testimonial";

const EventsPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-48">
        <div
          className={`flex flex-col w-full relative rounded-b-[200px] ${styles.bgGradientHero}`}
        >
          <Header isTransparent="bg-transparent" />
          <Main />
          
        </div>
        <Gira />
        <Operations />
        <VideoTestemonial />
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
