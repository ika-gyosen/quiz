docker 関係の説明書

``
# userAppServer[]() のディレクトリで以下コマンド実行

# まず通常の ts webpack ビルドが正常にできるか確認する npm script にある build を実行する
yanr install
yarn build:staging

# ts ビルドが正常に動くかを確認する
HASURA_URL=https://blar.hasura.app/v1/graphql NODE_ENV=staging HASURA_GRAPHQL_ADMIN_SECRET=remoteSecret node dist/main

# local で確認するための docker image を build する
docker build --tag quiz-suahl-search-app-server-stg -f docker/Dockerfile.stg . --build-arg HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey

# image ができていることを確認
docker images | grep quiz-suahl-search-app-server-stg

# image を走らせる
docker run -e PORT=1111 -e NODE_ENV=staging -e HASURA_URL=https://stg.hasura.app/v1/graphql -p 1111:1111 quiz-suahl-search-app-server-stg

# cloud run で動作させる docker image を build する:platform linux/amd64
docker build --platform linux/amd64 --tag quiz-suahl-search-app-server-stg -f docker/Dockerfile.stg . --build-arg HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey

# タグつけ
docker tag quiz-suahl-search-app-server-stg gcr.io/projectId/quiz-suahl-search-app-server-stg

# GCR にプッシュ
docker push gcr.io/projectId/quiz-suahl-search-app-server-stg

# GCR にプッシュされていることを確認 GCP のコンソールから

# cloud run に NODE_ENV=local を環境変数に入れてデプロイ いける






``

