 import image1 from '../../../../assets/BlockChain_System.jpg';
 import image2 from '../../../../assets/blockchaincharacteristics.jpg';
 
 import image3 from '../../../../assets/How-Blockchain-Works.png';
 import image4 from '../../../../assets/typesofBlockchain.jpg';
 import image5 from '../../../../assets/Applications-Of-Blockchain.png';

 
 
 
 export const data=[
    {id:1,
        question:"Suppose a refrigeration truck freezer fails during shipment to the ice cream shop. The ice cream in the shipment melts. The freezer is repaired and the ice cream refreezes before delivery. How would the ice cream shop know if the shipment is out of compliance?",
        option1:"The shipment is out of compliance temporarily. However, when the freezer is repaired, the temperature returns to freezing. The last transaction from the IoT temperature sensor updates the temperature in the ledger. Therefore, the shipment appears to be in compliance.",
        option2:" Smart contract logic sets the shipment to noncompliant when the temperature is too high. The ice cream shop can check if the shipment is out of compliance before accepting delivery.",
        option3:" You need to audit the blockchain history to determine compliance. Once you investigate the blockchain history, you can mark the shipment as being out of compliance.",
        ans:2,
    },
    {id:2,
        question:"Why is blockchain immutable? ",
        option1:"Blockchain uses hashes to tamper-proof the data in the blockchain. Validation would detect the invalid blocks. Bad blocks would be thrown out during consensus. Therefore, blockchain can't be changed in a healthy blockchain network. ",
        option2:"Blockchain ledgers are read only for participants by default. Only processes with the granted permission can write data. Since ledgers are read only to participants, they're immutable. ",
        option3:"Immutability depends on how you configure the blockchain network. It can be configured as read only or immutable. However, blockchain is fully configurable. You can configure nodes to allow administrators to make changes to transaction history. The changes are synchronized automatically. ",
        ans: 1,
    },
    {id:3,
        question:"How do smart contracts enable business workflows? ",
        option1:" Smart contracts use predefined business workflow logic for common business scenarios.",
        option2:"Smart contracts are client applications you write that call the blockchain to execute transactions and change ledger state. ",
        option3:" Smart contracts contain state and programmable logic. Transactions instantiate smart contracts and execute functions that change state. Therefore, smart contracts enable you to create a business workflow.",
        ans:3,
    },
    {id:4,
        question:"How 4. What are the important traits of blockchain technology?",
        option1:" Decentralization",
        option2:"Immutability ",
        option3:" Transparency ", 
         ans:1,
    },
    {id:5,
        question:" Which of the following choices is a type of blockchain?",
        option1:"Restricted blockchain network",
        option2:" Private blockchain network",
        option3:"Constraint blockchain network",
        ans:2,
    },
    {id:6,
        question:" What can you find in the block of a blockchain?",
        option1:"  Timestamp ",
        option2:"Transaction data ",
        option3:" All of the above",
        ans:3,
    },
    {id:7,
        question:"What is the name of the first block in a blockchain?",
        option1:"Genesis block",
        option2:"Origin block ",
        option3:" Block one",
        ans:1,
    },
    {id:8,
        question:"Can blockchain technology offer access to financial transactions like banks without any intermediaries?",
        option1:'True',
        option2:'False',
        option3:'Maybe',
      
        ans:1,
    },
    {id:9,
        question:"What is a dApp?",
        option1:"  A blockchain network",
        option2:"Type of cryptocurrency ",
        option3:" Decentralized application ",
        ans:3,
    },
    {id:10,
        question:" What is the incentive for miners to validate transactions?",
        option1:" Appreciation of the community.",
        option2:"Additional memory",
        option3:" Block rewards ",
        ans:3,
    },
]


export const data1=[

    {
        id:1,
        mainheading:'Getting Start With Fundamentals of Blockchain Development.',
        description:[
           'This learning path introduces you to blockchain and development on the Ethereum platform. Discover what skills are necessary to learn to begin building your own blockchain networks at scale.' ],
        image:'',
        heading:'In this learning path, you will:',
        list:[
            'Learn the foundations of blockchain and how blockchain technology works.',
            'Gain an understanding of the tools to develop on the Ethereum blockchain.',
           ' Create smart contracts and decentralized applications.',
           'Deploy to local and test Ethereum networks.',
        ],
        heading1:'Prerequisites',
        list1:[
            'Previous experience with any programming language like C, Python, or JavaScript.',
            'Basic knowledge of programming concepts.',
            'Familiarity with the command line to create new directories.',
            'Visual Studio Code installed.',
                ],
    
    },



    {
    id:2,
    mainheading:'Introduction',
    description:[
        'Implementing a solution across multiple companies can be challenging because you need to trust data from partners. In most cases, you use a central database. Data is stored in one location as the source of truth. The company who maintains the database must be trusted as the central authority of the data.',
        'Blockchain lets you implement a business process when you need to trust data and participants without using a central database.',
        'Suppose you are a solutions architect at a dairy processing company that produces ice cream. You use a supply chain to receive raw dairy goods from multiple dairies. Your company ships packaged ice cream to various retailers. ',
        'There has been food quality and safety issues caused by improper temperature storage during shipment. Because multiple companies are responsible to ship and store the product, it has been difficult to identify the supply chain party at fault.',
        'You want to create a system that identifies issues in the supply chain quickly. Each supply chain company wants to integrate their existing systems with the solution and independently audit shipments if there is a food safety recall.',
    ],
    image:image1,
    heading:'Learning objectives',
    list:[
        'Explain how blockchain enables trust and business processes between participants.',
       'Evaluate when to use blockchain for a solution.',
       'Classify available Azure blockchain options for a solution.',
    ],
    heading1:'Prerequisites',
    list1:[
        'Basic knowledge of programming concepts such as variables and conditional logic.',
    ],

},
{
    id:3,
    mainheading:'What is blockchain?',
    description:[
        'Blockchain is a record-keeping and contract-enforcement technology that uses cryptography to make it difficult to change previous history. It allows participants to share workstreams by tracking changes on a shared ledger.',
        'A system in which a record of transactions made in Bitcoin or another cryptocurrency is maintained across several computers that are interconnected in a peer-to-peer network is called a blockchain.',
        'In this decentralized ledger, each transaction is securely recorded and verified by multiple nodes, ensuring transparency, security, and immutability of the data. ',
        'The blockchain technology underpins the functionality of various cryptocurrencies and has potential applications in numerous other fields.',
    
    ],
    image:image2,
    heading:'Learning objectives',
    list:[
        'Explain how blockchain enables trust and business processes between participants.',
       'Evaluate when to use blockchain for a solution.',
       'Blockchain Main four Types.',
    ],
    heading1:'Prerequisites',
    list1:[
        'Basic knowledge of programming concepts such as variables and conditional logic.',
    ],

},

{
    id:4,
    mainheading:'How Blockchain Works?',
    description:[
        '1.Transaction Initiation:A user initiates a transaction. For example, Alice wants to send Bitcoin to Bob.',
        'The transaction contains details such as the sender, receiver, amount, and a timestamp.',
        '2.Transaction Verification:The transaction is broadcast to a network of computers (nodes).',
        'Nodes validate the transaction using consensus algorithms to ensure it is legitimate. This involves checking that Alice has enough Bitcoin to send and that she hasn’t spent it elsewhere.',
         '3.Transaction Added to a Block',

         'Verified transactions are grouped together into a block.',
         'Each block contains a list of transactions, a timestamp, and a reference (hash) to the previous block, creating a chain of blocks.',
        '4.Block Validation and Consensus',

        'Nodes in the network use a consensus mechanism (such as Proof of Work or Proof of Stake) to agree on the validity of the new block.',
        'In Proof of Work, for example, miners solve complex mathematical problems to validate the block. The first one to solve it gets to add the block to the blockchain and receives a reward (e.g., new bitcoins)',
        '5.Block Added to the Blockchain',

        'Once a block is validated, it is added to the blockchain.',
        'This addition is permanent and immutable, meaning it cannot be altered or deleted.',
        '6.Distribution and Synchronization',
        
        'The updated blockchain is distributed to all nodes in the network.',
        'Each node updates its copy of the blockchain, ensuring consistency across the network.',
        '7.Transaction Completion',
        
        'Bob receives the Bitcoin from Alice.',
        'The transaction is now a permanent part of the blockchain and can be verified by anyone.',
        
    ],
    image:image3,
    heading:'Applications of Blockchain',
    list:[
        'Cryptocurrencies',
       'Supply chain management.',
       'Finance',
       'Healthcare',
    ],
    heading1:'Key Components of Blockchain',
    list1:[
        'Blocks, Nodes, Consensus Mechanisms',
    ],

},


{
    id:5,
    mainheading:'Blockchain Types',
    description:[
        '1.Public Blockchain',

        'Description: Public blockchains are open to anyone and are fully decentralized,Anyone can participate in the network, validate transactions, and become a node, Examples include Bitcoin and Ethereum.',
        
        '2.Private Blockchain',

        'Description: Private blockchains are restricted and controlled by a single organization,Only authorized participants can join the network and validate transactions, Examples include Hyperledger Fabric and R3 Corda.',
        
       '3.Consortium (Federated) Blockchain',

       'Description:Consortium blockchains are partially decentralized, with multiple organizations governing the network, Only a group of pre-selected nodes have the authority to validate transactions, Examples include Quorum and Energy Web Foundation.',
       
       '4.Hybrid Blockchain',

       'Description:Hybrid blockchains combine features of both public and private blockchains, They allow controlled access to certain data while keeping other data public, Examples include Dragonchain and XinFin.',
       
        
       
    ],
    image:image4,
    heading:'Advantages',
    list:[
        'Decentralization',
       'Enhanced Security',
       'Transparency and Immutability',
       'Efficient and Automated Transactions',
       'Traceability',
       'Cost Savings',
    ],
    heading1:'Disadvantages',
    list1:[
        'Scalability Issues',
        'High Energy Consumption',
        'Complexity and Learning Curve',
        'Regulatory and Legal Issues',
        'Initial Costs',
        'Privacy Concerns',
    ],

},
{
    
  
    id:6,
    mainheading:'When to use Blockchain?',
    description:[
        'Decentralized Control is Needed',
        'Enhanced Security Requirements',
        'Transparency and Traceability', 
        'Smart Contracts for Automation',
        'Reducing Intermediaries',
         'Asset Tokenization',
        'Fraud Prevention and Provenance Tracking',
],
    image:image5,
    heading:'When Not to Use Blockchain',
    
    list:['1.Centralized Control is Preferred: A single authority managing the system is more efficient and suitable.',
       '2.High Transaction Volume and Speed Required: Applications requiring very high transaction throughput and low latency may not be suitable for blockchain.',
     'Simple Data Management Needs: Use cases involving straightforward data management without the need for decentralization.',
    'Cost Constraints: Blockchain systems can be more expensive to set up and maintain compared to traditional databases.',
    'Regulatory and Compliance Issues: Industries with strict regulatory requirements may face challenges in adopting blockchain.',


],
    heading1:'',
    list1:[
        ' ',
    ],

},


{
    
  
    id:7,
    mainheading:'Summary',
    description:[
        'Blockchain is a powerful technology that can transform various industries by enhancing security, transparency, and efficiency. ',
       ' However, it is essential to evaluate its suitability for specific use cases, considering its advantages, disadvantages, and the context of the application. ',
        'By understanding these factors, organizations can leverage blockchain effectively and make informed decisions about its adoption.',
    ],
    image:'',
    heading:'Real-World Applications Highlighting Blockchains Importance',
    
    list:['1.The importance of blockchain lies in its ability to provide enhanced security, transparency, efficiency, and trust across various sectors.',
    '2.By decentralizing control, automating processes, and ensuring data integrity, blockchain technology has the potential to revolutionize industries, create new business models, and empower individuals. ',
' 3.Its applications in finance, supply chain, healthcare, voting, and more demonstrate its wide-reaching impact and transformative potential.',

],
    heading1:'',
    list1:[
        ' ',
    ],

},

]