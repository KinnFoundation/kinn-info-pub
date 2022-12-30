const exetools = [
    {
      name: 'KinnDAO Minter',
      appCost: 'Free to Download',
      appFees: '3 NFTs are free, 4+ is 0.033 algo/NFT (per mint)',
      address: 'kinn.algo',
      image: '/upfocus.svg',
    },
    // More exetools...
  ]
const webtools = [
  {
    name: 'ARC19 Bulk Minter',
    appCost: '0.033 algo/NFT',
    appFees: 'Free for $KINN holders 👀',
    address: 'kinn.algo',
    image: '/ARC19.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/minter'
  },
  {
    name: 'ARC19 Updater',
    appCost: '0.1 algo/NFT',
    appFees: 'Free for $KINN holders 👀',
    address: 'kinn.algo',
    image: '/update.svg',
    appType: 'Web App, v0.2',
    action: 'Launch',
    ref: '/update'
  },
  {
    name: 'DeCollection Minter',
    appCost: 'Free to Use',
    appFees: '',
    address: 'kinn.algo',
    image: '/collection-logo.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/add-collection'
  },
  {
    name: 'Mass Send',
    appCost: 'Free to Use',
    appFees: '',
    address: 'kinn.algo',
    image: '/mass_send.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/send'
  },
  {
    name: 'Mass Opt Out',
    appCost: 'Free to Use',
    appFees: '',
    address: 'kinn.algo',
    image: '/out.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/out'
  },
  {
    name: 'Mass Asset Manager',
    appCost: '0.1 algo/NFT',
    appFees: 'Free for $KINN holders 👀',
    address: 'kinn.algo',
    image: '/manage.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/manage'
  },
  {
    name: 'Txn Blast',
    appCost: '1 algo/10k addresses',
    appFees: '',
    address: 'kinn.algo',
    image: '/mass_blast.svg',
    appType: 'Web App, v0.1',
    action: 'Launch',
    ref: '/blast'
  },
    // More webtools...
  ]
  
  export default function ToolList() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Costs
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Version
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exetools.map((tool) => (
                    <tr key={tool.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={tool.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.address}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{tool.appCost}</div>
                        <div className="text-sm text-gray-500">{tool.appFees}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Windows, V0.1
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="https://kinntools.s3.us-east-1.amazonaws.com/KinnDAOMinter.zip" download="KinnDAO Minter.zip" className="text-indigo-600 hover:text-indigo-900">
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                  {webtools.map((tool) => (
                    <tr key={tool.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={tool.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                            <div className="text-sm text-gray-500">{tool.address}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{tool.appCost}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {tool.appType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={tool.ref} className="text-indigo-600 hover:text-indigo-900">
                          {tool.action}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }