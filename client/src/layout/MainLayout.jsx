const MainLayout = ({ children }) => (
  <div className="min-h-screen w-full bg-zinc-700 text-white overflow-x-hidden">
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {children}
    </main>
  </div>
);

export default MainLayout;
