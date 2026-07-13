import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const applicationHtml = `<p>Hi {{name}},</p>
<p>I hope you are doing well.</p>
<p>I’m Tushar Tyagi, a Full-Stack & AI developer and an Open Source Contributor with experience in MERN, Next.js, ThreeJS, Docker, and backend systems.</p>
<p>I have two remote internship experiences working on full-stack applications, along with building real-time and AI-driven projects like Nuora and ChatNova.</p>
<p>I would love the opportunity to bring my skills to {{company}} and contribute to your team.</p>
<p>Please find my resume attached. I look forward to hearing from you!</p>
<p>Best regards,<br>Tushar Tyagi</p>`;

  const referralHtml = `<p>Hi {{name}},</p>
<p>I hope you are doing well.</p>
<p>I’m Tushar Tyagi, a Full-Stack & AI developer and an Open Source Contributor with experience in MERN, Next.js, ThreeJS, Docker, and backend systems.</p>
<p>I came across the {{role}} opening at {{company}} and believe my background makes me a strong fit. I have two remote internship experiences working on full-stack applications, along with building real-time and AI-driven projects like Nuora and ChatNova.</p>
<p>I'd really appreciate it if you would be open to referring me for this position.</p>
<p>Please find my resume attached. Thanks for your time!</p>
<p>Best regards,<br>Tushar Tyagi</p>`;

  const interestHtml = `<p>Hi {{name}},</p>
<p>I hope you are doing well.</p>
<p>I’m Tushar Tyagi, a Full-Stack & AI developer and an Open Source Contributor with experience in MERN, Next.js, ThreeJS, Docker, and backend systems.</p>
<p>I have two remote internship experiences working on full-stack applications, along with building real-time and AI-driven projects like Nuora and ChatNova.</p>
<p>I am exploring new software development opportunities and would love to know if there are any openings on your team at {{company}}.</p>
<p>Please find my resume attached. I look forward to connecting!</p>
<p>Best regards,<br>Tushar Tyagi</p>`;

  console.log("Seeding templates...");

  await prisma.emailTemplate.upsert({
    where: { type: "APPLICATION" },
    update: { subject: "Application for the {{role}} Developer", body: applicationHtml },
    create: { type: "APPLICATION", subject: "Application for the {{role}} Developer", body: applicationHtml },
  });

  await prisma.emailTemplate.upsert({
    where: { type: "REFERRAL" },
    update: { subject: "Referral Request for {{role}} at {{company}}", body: referralHtml },
    create: { type: "REFERRAL", subject: "Referral Request for {{role}} at {{company}}", body: referralHtml },
  });

  await prisma.emailTemplate.upsert({
    where: { type: "INTEREST" },
    update: { subject: "Exploring Software Development Opportunities", body: interestHtml },
    create: { type: "INTEREST", subject: "Exploring Software Development Opportunities", body: interestHtml },
  });

  console.log("Templates seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
