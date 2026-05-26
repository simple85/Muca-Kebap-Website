interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  badge?: string;
}

export default function ReviewCard({ name, rating, text, timeAgo, badge = "Google Review" }: ReviewCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md border border-gray-100 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muca-yellow text-muca-dark font-bold text-lg">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-muca-dark">{name}</p>
          <p className="text-xs text-gray-400">{timeAgo}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-muca-yellow" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      <div className="flex items-center gap-1 mt-auto">
        <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <span className="text-xs text-gray-400">{badge}</span>
      </div>
    </div>
  );
}
