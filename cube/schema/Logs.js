cube(`Logs`, {
  sql: `SELECT * FROM seattle_scheduler.logs`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [requestid, date]
    },
    
    dataDuration: {
      sql: `${CUBE}.\`data.duration\``,
      type: `sum`,
      title: `Data.duration`
    }
  },
  
  dimensions: {
    event: {
      sql: `event`,
      type: `string`
    },
    
    message: {
      sql: `message`,
      type: `string`
    },
    
    requestid: {
      sql: `${CUBE}.\`requestId\``,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    },
    
    date: {
      sql: `date`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
