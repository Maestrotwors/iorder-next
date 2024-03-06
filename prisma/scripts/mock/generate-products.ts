import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (var i = 0; i < 10_000; i++) {
    console.log('mock product created, id: ' + i + 10);
    const productX = await prisma.product.upsert({
      where: { id: i + 10 },
      update: {},
      create: {
        name: 'MR PROPER Рідкий миючий засіб для прибирання підлоги та стін Лимон 1л - длинный текст далее длинный текст далее длинный текст далее',
        price: 30,
        mainImageUrl:
          'https://prodasnovastacc.blob.core.windows.net/product-images/3/4084500644762.jpg',
      },
    });
  }
}

main();
