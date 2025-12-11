import React from 'react'

const HeroSection = () => {
  return (
     <div className="relative h-[500px] flex items-center justify-center text-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" 
                    alt="Ha Anh Team" 
                    className="w-full h-full object-cover"
                />
                {/* Overlay Gradient Đỏ */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/90 via-red-600/80 to-red-500/80"></div>
            </div>
    
            <div className="relative z-10 container mx-auto px-6 pt-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                    Hà Anh JSC
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-8 animate-fade-in-up delay-100">
                    Chuyên nghiệp – Tận tâm – Hiệu quả
                </p>
                <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>
          </div>
  )
}

export default HeroSection