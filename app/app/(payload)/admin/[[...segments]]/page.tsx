import React from 'react'
import { getPayload } from 'payload'
import config from '../../../../payload.config'
import { createService, deleteService } from '../actions'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

const Page = async ({ params, searchParams }: Args) => {
  const payload = await getPayload({ config })
  const services = await payload.find({
    collection: 'services',
  })

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-emerald-100">
      {/* Sidebar / Topbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white font-black text-xs">AVC</span>
            </div>
            <span className="font-bold tracking-tight text-slate-800">Control Center</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Live Services</span>
             </div>
             <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                👤
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Action Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Новая услуга</h2>
                <p className="text-slate-400 text-sm mt-1">Добавьте новую позицию на главный экран сайта</p>
              </div>

              <form action={createService} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Номер</label>
                  <input 
                    name="num" 
                    placeholder="Пример: 01" 
                    required 
                    className="w-full bg-slate-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-slate-200 focus:ring-4 focus:ring-slate-50 transition-all outline-none font-medium placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Название услуги</label>
                  <input 
                    name="title" 
                    placeholder="Монтаж систем отопления" 
                    required 
                    className="w-full bg-slate-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-slate-200 focus:ring-4 focus:ring-slate-50 transition-all outline-none font-medium placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Описание</label>
                  <textarea 
                    name="desc" 
                    placeholder="Опишите преимущества услуги..." 
                    required 
                    rows={4}
                    className="w-full bg-slate-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-slate-200 focus:ring-4 focus:ring-slate-50 transition-all outline-none font-medium placeholder:text-slate-300 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-emerald-600 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                >
                  Опубликовать
                </button>
              </form>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Всего услуг</h3>
              <p className="text-5xl font-black">{services.totalDocs}</p>
              <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <span>Active on website</span>
                <span className="px-2 py-0.5 bg-emerald-400/10 rounded-md text-[10px]">SYNC</span>
              </div>
            </div>
          </div>

          {/* List Panel */}
          <div className="lg:col-span-8">
            <header className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-2xl font-bold tracking-tight">Список услуг</h2>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all">
                  🔄
                </button>
              </div>
            </header>

            {services.totalDocs === 0 ? (
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-20 text-center shadow-sm">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100">
                  <span className="text-5xl opacity-20">🧊</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Пусто</h3>
                <p className="text-slate-400 font-medium">Пока нет ни одной услуги. Создайте первую!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {services.docs.map((service: any) => (
                  <div key={service.id} className="group bg-white p-6 pl-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="text-3xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors">
                        {service.num}
                      </div>
                      <div className="h-10 w-px bg-slate-100"></div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg group-hover:text-slate-900 transition-colors">{service.title}</h4>
                        <p className="text-slate-400 text-sm font-medium line-clamp-1 max-w-md">{service.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="opacity-0 group-hover:opacity-100 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition-all text-slate-400">
                        ✏️
                      </button>
                      <form action={deleteService.bind(null, service.id)}>
                        <button type="submit" className="opacity-0 group-hover:opacity-100 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center hover:bg-rose-100 transition-all text-rose-300 hover:text-rose-500 uppercase font-black">
                          ✕
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}

export default Page
