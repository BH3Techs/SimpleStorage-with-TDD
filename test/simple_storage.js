const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts ) {
  describe("Inital deployment", async () =>{
    it("should assert true", async function () {
      await SimpleStorage.deployed();
      return assert.isTrue(true);
    });
    it("The initial state should be zero", async () =>{
      const simpleStorage = await SimpleStorage.deployed();
  
      const ssNumber = await simpleStorage.getNumber.call();
  
      assert.equal(ssNumber,0, 'Intial value must be equal to zero');
    })
  })

  describe("Functionality", async() =>{
    it("should store the value 42", async () =>{
      const simpleStorage = await SimpleStorage.deployed();

      await simpleStorage.setNumber(42,{from: accounts[0]});

      const ssNumber = await simpleStorage.getNumber.call();

      assert.equal(ssNumber, 42);

    });
    it("shouldn't let some-one change the balance",async () =>{
      const [owner, badJoe] = accounts;
      const simpleStorage = await SimpleStorage.new(42);

      try{
        await simpleStorage.setNumber(22, {from: owner});
      }catch(err){
      const balance = await web3.eth.getBalance(accounts[0]);
      console.log(balance);
      const ssNumber = simpleStorage.getNumber.call();
      assert.equal(ssNumber,42, "Number successfully changed")

      }
    })
  })
});
