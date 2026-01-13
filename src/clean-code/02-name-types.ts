(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const listOfUsers = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    const listOfUserEmails = listOfUsers.map(user => user.email);

    const isJumping = false;
    const isRunning = true;
    const hasItems = true;
    const isLoading = false;

    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea(side: number) {
        throw new Error('Function not implemented.');
    }
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();