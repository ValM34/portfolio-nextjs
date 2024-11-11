export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300 min-h-screen flex flex-col items-center justify-center border-t border-slate-700">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-pretty text-4xl font-semibold tracking-tight text-slate-300">
                  Me contacter
                </h1>
                <p className="mt-4 text-base/7">
                  Contactez-moi directement par e-mail ou par téléphone.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-200 p-10 text-slate-900">
                <h3 className="text-base/7 font-semibold">
                  Valentin Moreau
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:collaborate@example.com"
                        className="font-semibold"
                      >
                        valentin.moreau34750@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>(+33) 06 73 56 44 56</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
