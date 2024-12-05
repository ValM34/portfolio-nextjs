export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div id="override_tailwind_for_strapi_rich_text" className="bg-gradient-to-r from-slate-950 to-slate-900 text-slate-200 min-h-[calc(100vh-65px-57px)] flex flex-col items-center justify-center px-6 sm:px-12 py-12">
      <div className="max-w-3xl">
        {children}
      </div>
    </div>
  )
}
