import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Sophia-Martinez.pdf";

export const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Sophia-Martinez">
        <img src={DownloadIcon} alt="Resume download button" />
        Download Resume
      </a>
    </section>
  );
};
