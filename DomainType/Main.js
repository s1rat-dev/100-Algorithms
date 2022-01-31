

function domainTypes(websitesWithDomain)
{
    const domains = {
        'org' : 'organization',
        'com' : 'commerical',
        'net' : 'network',
        'info' : 'information'
    }

    let websitesDomainNames = []
    for (let i = 0; i < websitesWithDomain.length; i++)
    {
        let tempDomains = websitesWithDomain[i].split('.')
        let domainName = tempDomains[tempDomains.length - 1]
        if(domains.hasOwnProperty(domainName))
        {
            websitesDomainNames.push(domains[domainName])
        }
    }

    return websitesDomainNames
}

console.log(domainTypes(["en.wikipedia.org","sirat.net","bilmemne.info","facebook.com"]))
