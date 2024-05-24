import React from 'react'

function ContentPages() {
    return (
        <>
        <div>
            <h2>How Blockchain Works?</h2>
            
                <p>Now that we know the basics of blockchain, let's see how it works behind the scenes. This information should help you decide whether blockchain works for your scenario.</p>
                <h2>How Data Distributed?</h2>
                <ul>
                    <li>How is data distributed?</li>
<li>In our scenario, there are multiple companies. We could have a centralized database at the dairy processing company. However, no one participant wants to be the central authority. We could use a blockchain distributed ledger. Using blockchain removes the need for a central authority. Also, each participant with a blockchain node has a copy of the ledger so that they can do their own auditing and integration with their systems. But, there isn't a requirement for each company to have their own node. Nodes may be shared between partners.</li>

<li>Each node is connected to other nodes using a blockchain network. For example, Dalia Pelayo farms, the ice cream factory, and the ice cream shops each have a node they manage. Contoso West and Contoso East are separate partners that share the same parent company. Contoso has one node. There doesn't need to be a one to one relationship of nodes to companies.</li>
                </ul>
    
        </div>
            <div>
                <h2>Blockchain Types</h2>
                <p>A blockchain can be public or private. The distinction determines who can participate in the blockchain network.</p>
                <h2>Public</h2>
                <ul>
                    <li>What if you wanted a network where you trusted no one? Anyone with Internet access can join your blockchain network. No onboarding is required and you don't have to ask an authority for permission.</li>

                    <li>A public blockchain is decentralized with no single authority on the network. All transactions in the blockchain are visible by any node on the network.</li>

                    <li>The first blockchain network was created for Bitcoin. The Bitcoin blockchain network is public. All transactions are viewable by anyone. For example, you can view the latest Bitcoin blocks and transactions using a block explorer.</li>

                    <li>The consensus algorithms for public blockchains use cryptocurrency as a reward to validate blocks. Public blockchains may also charge a cryptocurrency fee for validating transactions. Public blockchain privacy is limited. If you wanted to keep your transaction private, you should only share your public key with the other participant in the transaction.</li>
                </ul>
                <h2>Private</h2>
                <ul>
                    <li>What if we had some trust of the participants in the blockchain network? The information stored in the blockchain would only be accessible to participants invited to the blockchain network. Private networks are semi-trusted networks. In a private network, there's an agreement between all participants about how they use the blockchain.</li>

                    <li>A consortium blockchain is a private blockchain but authority is distributed and acts in the best interests of the network.</li>


                    <li>In our scenario, we want transaction privacy from the public. Consortium blockchains can restrict who has authority to participate in consensus. Trust is enforced by restricting only the participants be involved in validation. The group of participants is called a consortium. Consensus algorithms for consortium blockchains can use authority rather than cryptocurrency.</li>

                    <li>We may also want privacy of some data. For example, all parties would know a product was transported but details about the shipment could be kept private. Since we use multiple shipping companies, the details about the shipments could be kept private between two of the parties. Competing shipment companies would only know that the transaction happened and couldn't see the details about the shipment.</li>
                </ul>
                <h2>Blockchain Protocols.</h2>
                <ul>
                    <li>There are several blockchain protocols. The most well known is Bitcoin. The Bitcoin blockchain network was created for Bitcoin cryptocurrency. The primary function of the Bitcoin blockchain network is to store Bitcoin value. Value can be transferred from one to another in a trustless way.</li>

<li>Ethereum is a general use protocol. Ethereum extends what Bitcoin has created to provide a protocol that allows small programs to be written, and not just simple value transfers. The net effect is the ability to add logic and code instead of simple fixed value transfers.</li>

<li>If you're going to use blockchain for your own solution, consider a general use protocol like Ethereum and Hyperledger Fabric. They're programmable blockchains that can be used for several scenarios. General use protocols use smart contracts to encode business logic and state. In this module, we focus on the Ethereum protocol.</li>


                </ul>

            </div>
            <div>
                <h2>When to use Blockchain?</h2>
                <p>Blockchain technology works best for certain scenarios. You shouldn't use it as a general purpose solution. In many cases, a centralized database is a better option. When considering using blockchain, ask yourself these questions about your scenario.</p>
                <h2>Participants</h2>
                <ul>
                    <li>Do you need to support multiple partners or companies?</li>
                    <li>Do you want to avoid a central authority? Perhaps there isn't trust in any one participant.Participants may not want to be reliant on a third party.</li>
                    <li>Do the participants share data or use a workflow that involves several or all the participants? Blockchain technology guarantees each node is consistent. Most other business to business (B2B) solutions rely on synchronization. Synchronizing data introduces breakage and expense to B2B systems. The consistency of the distributed data is a key advantage of blockchain technology.
                    </li>
                </ul>
                <h2>Performance</h2>
                <ul>
                    <li>Is your transaction throughput low? Depending on the blockchain protocol and consensus mechanism, transaction rates can be low.
                    </li> <li>Is there defined business logic when interacting with other business partners? Executing business logic in a transaction can affect performance.
                    </li>
                </ul>

                <h2>Business Logic</h2>
                <ul>
                    <li>Is your business logic simple? Executing a complex smart contract function on a public blockchain requires more cryptocurrency than a simple one.</li>
                    <li>Is your business logic static and doesn't change? Since blockchain data is immutable, smart contract logic changes require you to deploy a new contract to a new address. Consider how you'll version your business logic.
                    </li>
                </ul>
                <h2>Trust</h2>
                <ul>
                    <li>Is trust and integrity required between participants?</li>
                    <li>Does the order of transactions matter?</li>
                    <li>Do you need transaction privacy?</li>
                </ul>
                <h2>Blockchain Options on Azure.</h2>
                <p>If you want to host your solution on Azure, there are several options you can consider.</p>
                <h2>Templates</h2>
                <p>Solution templates provide Infrastructure as a Service (IaaS) packaged virtual machines (VMs) for many major protocols and blockchain network configurations. For example, there are several third-party solution templates for popular blockchain protocols including Hyperledger Fabric, Corda, Quorum, BlockApps, and GoChain.</p>
                <h2>ConsenSys Quorum Blockchain Service</h2>
                <p>Quorum Blockchain Service is a fully managed ledger service for enterprises giving them the ability to grow and operate blockchain networks at scale. For more information about Quorum Blockchain Service, see Consensys Quorum Blockchain .</p>
                <h2>Azure confidential ledger</h2>
                <p>Azure confidential ledger provides a managed and decentralized ledger for data entries backed by blockchain. You can maintain data integrity by preventing unauthorized or accidental modification with tamperproof storage. Data is protected at rest, in transit, and in use with hardware-backed secure enclaves used in Azure confidential computing.</p>
                <h2>Azure SQL Database ledger</h2>
                <p>Azure SQL Database ledger enables tamper-evidence through cryptographic verification for your centralized data stores. SQL Database ledger removes the complexity of decentralized blockchain technology. It provides many of the benefits of blockchain data integrity in a fully managed and familiar SQL environment.</p>
            </div>
            <div>
                <h2>Summary</h2>
                <p>Our goal was to show you how to evaluate whether you should consider blockchain technology when developing a solution. We developed some criteria you can use to guide your decision:</p>

                <ul>
                    <li>How blockchain establishes trust between participants.</li>
                    <li>Performance considerations.</li>
                    <li>Business logic.</li>
                    <li>Azure options.</li>
                </ul>

                <p>Analyze your business process against each of these criteria. The results should give you an idea of how close a match blockchain is to your needs.</p>
            </div>
        </>
    )
}

export default ContentPages