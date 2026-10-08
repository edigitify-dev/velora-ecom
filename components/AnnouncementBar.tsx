export default function AnnouncementBar() {
  return (
    <div className="flex h-8 items-center justify-center bg-ink px-4 text-center text-[11px] tracking-wide text-white">
      <p className="truncate">
        Free shipping on orders above ₹999
        <span className="mx-3 opacity-50" aria-hidden="true">
          |
        </span>
        Easy 7-day returns
      </p>
    </div>
  );
}
