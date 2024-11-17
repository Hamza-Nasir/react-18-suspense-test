export async function getNewsData(): Promise<Array<{ id: number; name: string }>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'News 1' },
                { id: 2, name: 'News 2' },
                { id: 3, name: 'News 3' }
            ]);
        }, 3000);
    });
}