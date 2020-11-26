<template>
  <div class="page-wrapper">
    
    <div class="header-title">
        <h1 id="title-page">
            List of {{ repoList.length }} public repositories of @{{ repoList[0].owner }}
        </h1>
    </div>

    <table class="repo-table">
        <tr class="table-row table-header">
            <td class="table-column">ID</td>
            <td class="table-column">Repository Name</td>
            <td class="table-column">URL</td>
        </tr>
        <tr v-for="repo in repoList" :key="repo" class="table-row">
            <td class="table-column" id="column-id">{{ repo.id }}</td>
            <td class="table-column" id="column-reponame">{{ repo.name }}</td>
            <td class="table-column" id="column-repourl">
                <a :href="repo.html_url">{{ repo.html_url }}</a>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import RepoCard from '@/components/RepoCard.vue';

export default {
    components: {
        RepoCard
    },
    data() {
        return {
            login: ''
        }
    },
    asyncData({ params, $http }) {
        let { username } = params;
        return $http.$get(`/api/users/${username}/repos`)
            .then(res => {
                return {repoList: res};
            })
            .catch(err => {
                console.log(err);
                return { status: 404, message: 'Erro on retrieve the repository info' };
            });
    } 
}
</script>

<style lang="scss">
.page-wrapper {
    width: 90%;
    height: fit-content;
    flex-direction: column;
}

.header-title {
    height: 100px;
    width: 100%;
    padding: 2em;
    margin: 0 auto;
    text-align: center;
}


.repo-table {
    width: 90%;
    margin: 0 auto;

    .table-row {
        width: 100%;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #bababa;
        font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
        font-size: 12pt;
        margin-block: .5em;
        border-radius: 10px;
        box-shadow: 0 0 6px #aaa;
    }

    .table-header {
        font-weight: bold;
        border-block: 1px solid black;
    }

    #column-reponame {
        text-align: center;
        font-weight: bold;
    }

    #column-repourl {
        font-size: 10pt;
    }
}
</style>