
export default function MyResume() {

  const resumeTitle = "LocPham Resume"

  return (
    <div className="mt-10 flex flex-col items-center justify-center h-[680px]">
      <iframe
        className="w-full flex-grow"
        src="/Files/LocPham-Resume.pdf"
        title={resumeTitle}
      />
    </div>
  );
};

