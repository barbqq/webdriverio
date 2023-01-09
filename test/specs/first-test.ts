describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', async () => {
        await browser.url('https://duckduckgo.com/')

        await $('#search_form_input_homepage').setValue('WebdriverIO')
        await $('#search_button_homepage').click()

        const title = await browser.getTitle()
        console.log('Title is: ' + title)
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })
})