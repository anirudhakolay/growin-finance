export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  isMain: boolean;
}

export const branches: Branch[] = [
  {
    id: 'mumbai-main',
    name: 'Mumbai Head Office',
    address: '7th floor, No 716, Highway Commerce Center, I B Patel Road, Mumbai Suburban, Maharashtra 400063',
    phone: '9769603074',
    email: 'info@growinfinserv.com',
    hours: 'Mon–Sat: 9:00 AM – 6:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4!2d72.8777!3d19.0759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM3LjIiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890',
    isMain: true,
  },
];
