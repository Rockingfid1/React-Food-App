export default function BackendError({ children }) {
  return (
    <p className="text-white font-semibold text-3xl text-center translate-y-32 bg-red-500 w-2/4 m-auto p-10 rounded-lg shadow-lg shadow-slate-950 border-2 border-black">
      {children}
    </p>
  );
}
