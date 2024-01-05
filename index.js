const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Add a post
    const newPost = await prisma.post.create({
        data: {
            body: 'This is my third post!'
        },
    });
    console.log(`Created new post: ${newPost.body} (ID: ${newPost.id})`);
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
