import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPortfolioData() {
    return {
      profile: {
        name: 'PHAN HỮU HIẾU',
        role: 'CEO & Founder @ OMedia',
        description: 'Tiên phong công nghệ Bullet Time & Giải pháp truyền thông số tại Việt Nam.',
        avatar: 'https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg', // Thay ảnh thật sau
        email: 'contact@omedia.art',
        phone: '0909 999 999',
        socials: [
          { name: 'Facebook', url: '#' },
          { name: 'LinkedIn', url: '#' },
          { name: 'TikTok', url: '#' }
        ]
      },
      stats: [
        { label: 'Years Experience', value: '15+' },
        { label: 'Projects Done', value: '200+' },
        { label: 'Partners', value: '50+' }
      ],
      services: [
        { title: 'Bullet Time Technology', desc: 'Cung cấp giải pháp quay phim 360 độ chất lượng 4K/6K.' },
        { title: 'Strategic Branding', desc: 'Tư vấn chiến lược định vị thương hiệu doanh nghiệp.' },
        { title: 'Digital Transformation', desc: 'Chuyển đổi số toàn diện cho doanh nghiệp Media.' }
      ],
      projects: [
        {
          title: 'OMedia Launching',
          category: 'Event & Tech',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
        },
        {
          title: 'Miss Grand Vietnam 360',
          category: 'Media Production',
          year: '2023',
          image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop'
        },
        {
          title: 'VTV Digital Tech',
          category: 'Technology',
          year: '2023',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
        },
        {
          title: 'OBranding Ecosystem',
          category: 'Development',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
        }
      ]
    };
  }
}