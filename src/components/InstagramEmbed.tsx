const REEL_IDS = [
  "DPeNsjejTRr",
  "DBG9rL2vZ7k",
  "DH6IdvUsPDr",
  "DBg3miduKYC",
];

export default function InstagramEmbed() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {REEL_IDS.map((id) => (
        <div key={id} className="flex justify-center">
          <iframe
            src={`https://www.instagram.com/reel/${id}/embed/`}
            className="rounded-xl border-0"
            style={{ maxWidth: 480, width: "100%", minHeight: 480 }}
            allowFullScreen
            loading="lazy"
            title={`Instagram Reel ${id}`}
          />
        </div>
      ))}
    </div>
  );
}
