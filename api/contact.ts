import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { phone, email, company, product, message } = req.body;

  if (!phone || !email || !message) {
    return res.status(400).json({ success: false, message: '필수 항목을 입력해주세요.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
    <h2>오엔뷰 홈페이지 상담 신청</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">연락처</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">회사명</td><td style="padding:8px;border:1px solid #ddd;">${company || '-'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">제품 유형</td><td style="padding:8px;border:1px solid #ddd;">${product || '-'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">문의 내용</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"오엔뷰 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: '오엔뷰 홈페이지 상담 신청',
      html: htmlContent,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ success: false, message: '이메일 전송에 실패했습니다.' });
  }
}
