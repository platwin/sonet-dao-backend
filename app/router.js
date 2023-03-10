module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.index.index);
    router.get('/api/v1', controller.index.index);

    router.post('/api/v1/bind-addr', controller.socialMedia.bindAddr);
    router.post('/api/v1/referral/gen', controller.socialMedia.generateReferralCode);
    router.post('/api/v1/referral/accept', controller.socialMedia.acceptReferral);
    router.post('/api/v1/bind-addr/record', controller.socialMedia.recordContentId);
    router.post('/api/v1/unbind-addr', controller.socialMedia.unbind);
    router.post('/api/v1/favorite-nft', controller.nft.favoriteNFT);
    router.post('/api/v1/nft/register', controller.nft.regNFT);
    router.post('/api/v1/nft/collection/gen', controller.nft.genTONCollectionDeployTx);
    router.post('/api/v1/nft/item/gen', controller.nft.genTONNFTItemMintTx);
    router.post('/api/v1/proposal/create', controller.dao.createProposal);
    router.post('/api/v1/proposal/vote', controller.dao.vote);
    router.post('/api/v1/twitter-nft/add', controller.socialMedia.addTwitterNFT);
    router.post('/api/v1/dao/tg/create', controller.dao.createTGDao);

    router.get('/api/v1/favorite', controller.nft.queryFavorite);
    router.get('/api/v1/bind-attr', controller.socialMedia.bindAttr);
    router.get('/api/v1/referral', controller.socialMedia.getSelfReferralCode);
    router.get('/api/v1/referral/count', controller.socialMedia.getReferralCodeCount);
    router.get('/api/v1/referral/code', controller.socialMedia.getBindCode);
    router.get('/api/v1/nfts', controller.nft.queryNFT);
    router.get('/api/v1/nft/:nft_id', controller.nft.queryNFTById);
    router.get('/api/v1/orders', controller.orders.queryOrder);
    router.get('/api/v1/records', controller.records.queryRecord);
    router.get('/api/v1/collection-list', controller.dao.queryCollectionList);
    router.get('/api/v1/collection', controller.dao.queryCollectionByNFT);
    router.get('/api/v1/collection/nfts', controller.dao.queryCollectionNFTs);
    router.get('/api/v1/collection/:collection_id', controller.dao.queryCollection);
    router.get('/api/v1/dao', controller.dao.queryDAOList);
    router.get('/api/v1/proposal', controller.dao.queryProposalList);
    router.get('/api/v2/proposal', controller.dao.queryProposalListV2);
    router.get('/api/v3/proposal', controller.dao.queryProposalListV3);
    router.get('/api/v1/proposal/permission', controller.dao.queryProposalPermission);
    router.get('/api/v1/proposal/votes', controller.dao.queryVotes);
    router.get('/api/v1/votes', controller.dao.queryVotesList);
    router.get('/api/v1/proposal/votes/num', controller.dao.getVotes);
    router.get('/api/v1/twitter-nft/counts', controller.socialMedia.getNFTTwitterCounts);
    router.get('/api/v1/twitter-nft/snapshots', controller.socialMedia.getNFTTwitterSnapshot);
    router.get('/api/v1/twitter-nft', controller.socialMedia.getTwitterNFT);
    router.get('/api/v1/statistic', controller.statistic.getData);

    router.get('/assets/erc-1155/:contracts/:token_id', controller.assetsERC1155.getURIAssets);
    router.get('/assets/ton-collection/:chain_name/:collection_name', controller.nft.getTONCollectionMetadata);
    router.get('/assets/ton-collection/:chain_name/:collection_name/:token_id', controller.nft.getTONCollectionItemMetadata);
};
