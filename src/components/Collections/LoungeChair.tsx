export default function LoungeChair() {
    return (
        //remove all the commented code
        <section className="lg:col-span-8 flex flex-col gap-md">
            <div className="relative bg-surface-container-low rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center soft-shadow group">
                <img className="w-full h-full object-cover" data-alt="A high-end, minimalist lounge chair presented in a brightly lit architectural space with warm natural sunlight casting soft shadows. The furniture piece features a rich walnut wood frame and cream-colored textured upholstery, reflecting a refined and intentional design aesthetic. The environment is clean and airy, emphasizing the tactile quality of the materials and the organic curves of the chair." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4qB-yZRc1EtgXCbGrl_gIWN2o-h_VDTOMbxWWPy0FxizR_FivASAzV_bervMK3P1AlgunttOwITcDc_g0k78baesfOFhWiYzD7Wrt7uIXDYvjOh26pS37rWMnWaVBWaR737QN3a3H28bjMPBwjVbLopGsM89w8RxnFDqcbDufjJPb0XAH5uZ-fDIpIzhTboj02WQqaAdLalgYiotUdF1JTStFFPVcL9iwCbQwlhCArJ5CuoKZYXjtDl5oGu7xf7rbHPwoIZHD1U" />
                <div className="absolute bottom-md left-md flex gap-xs">
                    <button className="bg-surface/90 backdrop-blur px-sm py-xs rounded-full flex items-center gap-xs text-primary font-label-md text-label-md hover:bg-surface transition-colors">
                        <span className="material-symbols-outlined text-[18px]">360</span>
                        View 3D
                    </button>
                    <button className="bg-surface/90 backdrop-blur px-sm py-xs rounded-full flex items-center gap-xs text-primary font-label-md text-label-md hover:bg-surface transition-colors">
                        <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                        View in Room
                    </button>
                </div>
                <div className="absolute top-md right-md flex flex-col gap-xs">
                    <button className="w-10 h-10 rounded-full bg-surface/90 flex items-center justify-center hover:bg-surface transition-colors text-primary">
                        <span className="material-symbols-outlined">zoom_in</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-sm">
                <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden cursor-pointer border-2 border-primary">
                    <img className="w-full h-full object-cover" data-alt="Close up detail of the seat and backrest of a luxury armchair featuring premium light beige fabric in a bright studio setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCqF516tLGHoM2dkpPWwjxGq_j-0oA4Y7vyUZbcAl4S9QeWnc6gTMSsjkmFdAgsfQN94tGZ-n0wtgrkqCnQC-zG1hDdcAvErRZ2pDtgWgip_J6ntMB1DFA_qlqfDOeY3E9XBpAq0y1F7VbrDFatj0p4nTRloWaVq73nFRHfVXn7VJ8-lyt0zlH38UvbOZ91-ylpX9TNAKUEl7KwXr4hNNg3e-rcIPw22mP6X1_MI3dgviU1nnVEofDNpY79gQPkaDihrV8yHt6IAU" />
                </div>
                <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img className="w-full h-full object-cover" data-alt="Macro detail of the polished walnut wood grain finish on the armrest of a piece of furniture, highlighting the organic texture and craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7UwmOArhuqY8TZxV9wwPY6wFIMck6KwCo5FN0NHafjANHx9jkfp87M-JEKTumccxbQ0bsRsGwwC2pYHhirpbpgnKYRP70OGwqZaYr1JdSNdahWyPMtyQEiXjnJ3-LKMXXLVLJ8sEWuOet7UtHaHuTTZvLp-xXHs3SSwsCdrTExvIwdR4n_bjfhED47j8yX8fWYJWyW769IxC3BNb2cu6eUcjPc0T5XJgdCKJ-pZejfgtaMF4m0sJmlsFODSGKu5EyurVWjHugAlI" />
                </div>
                <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img className="w-full h-full object-cover" data-alt="Detailed side profile of a modern lounge chair frame showcasing the architectural precision and elegant joinery work in a soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqyxF0Rtx8QQD6b5Aj3l5_vCFMePbFwJnzUz2NoatTxNVcCYfWZAevqu0y3udEJdu2P3utSpRlBLgb4DKiLcIQE3h11RibBwza8N1U8_MzSjjVVzygx1Y06hz65Q2BjJkeVYadVujS3V0H4v7yEXzvlxXlSpvaDv0yz1VsvAh7tCUMDjqe-nV9mTdw_-zBhJo_LtgBH_EVwZZ208_m6sWl0cJfi-OCdp3ls53axSrvOSXS87KiDNcdhBUSXDpuzmBj_hxWA5dG-jY" />
                </div>
                <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary scale-150">play_circle</span>
                </div>
            </div>
        </section>
    );
}