describe('Main page',() => {
    it('Verify list items', async () => {
        await browser.url('/');
        const listExamples = $$("//ul//li");
        expect(listExamples).toBeElementsArrayOfSize(44);
    })
})