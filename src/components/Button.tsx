export default function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-100 transition w-1/2 justify-center">
      {children}
    </button>
  );
}