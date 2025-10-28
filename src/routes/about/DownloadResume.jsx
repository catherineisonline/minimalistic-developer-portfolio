import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Sophia-Martinez.pdf";

export const DownloadResume = () => {
  return (
    <a className="download-btn" href={Resume} download="Sophia-Martinez" aria-label="Download resume">
      <img src={DownloadIcon} alt="" aria-hidden="true" />
      Download Resume
    </a>
  );
};
