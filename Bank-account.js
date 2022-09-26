const accounts = [
    {
      name: 'Babu',
      accountNo: 2,
    },
    {
      name: 'Chandra',
      accountNo: 3,
    },
    {
      name: 'Arun',
      accountNo: 1,
    },
  ];
  const balances = {
    //accountNo: balance
    '1': 5000,
    '2': 2000,
    '3': 0,
  };
  const transactions = [
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 1,
      type: 'deposit',
      amount: 500,
    },
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 2,
      type: 'deposit',
      amount: 300,
    },
    {
      accountNo: 2,
      type: 'withdrawal',
      amount: 200,
    },
    {
      accountNo: 2,
      type: 'deposit',
      amount: 200,
    },
  ];

  
  const generateBalance = (user) => ({
      name: user.name,
      accountNo: user.accountNo,
      balance: balances[user.accountNo]
    });

  const displayBalance = () => accounts.map(generateBalance);

  const generateUpdatedBalance = (transaction) => 
    transaction.type==="withdrawal" 
       ? balances[transaction.accountNo]-=transaction.amount
       : balances[transaction.accountNo]+=transaction.amount;

  const displayUpdatedBalance = () => transactions.map(generateUpdatedBalance);
  
  const main = () => {
    console.log("Balances before transaction:");
    console.table(displayBalance()); 
    displayUpdatedBalance();
    console.log("Balances after transaction:");
    console.table(displayBalance());
    };
 main();