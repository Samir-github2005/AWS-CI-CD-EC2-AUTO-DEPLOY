// 'use client'
// import { useState } from 'react'

// export default function Home() {
//   const [name, setName] = useState('')
//   const [response, setResponse] = useState('')

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const res = await fetch('https://d11yrfnfva.execute-api.eu-north-1.amazonaws.com/default/handleForms/handleContactForm', {
//         method: 'POST',
//         body: JSON.stringify({ name }),
//         headers: { 'Content-Type': 'application/json' }, 
//       })
//       const data = await res.json()
//       setResponse(data.message)
//     } catch (error) {
//       setResponse('Error: Failed to submit form')
//       console.error('Form submission error:', error)
//     }
//   };

//   return(
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <h1 className='text-2xl font-bold'>Form Handler</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>
//         <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='border-2 border-gray-300 rounded-md p-2' />
//         <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
//       </form>
//       {response && <p className='text-2xl font-bold'>{response}</p>}
//     </div>
//   );
// }

// ...existing code...
'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">My App</h1>
          <nav className="space-x-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">Simple landing page for you</h2>
            <p className="text-gray-600 mb-6">A clean, responsive template to showcase your product and collect interest.</p>
            <div className="flex gap-3">
              <a href="#features" className="inline-block bg-blue-600 text-white px-5 py-2 rounded">Get started</a>
              <a href="#contact" className="inline-block border border-gray-300 px-5 py-2 rounded text-gray-700">Contact sales</a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center">
            <div className="w-64 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center">
              <span className="text-blue-700 font-semibold">Product preview</span>
            </div>
          </div>
        </section>

        

        
      </main>

      <footer className="bg-gray-50 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
