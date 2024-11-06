# Advanced Functionalities

## 1. Caching

  To improve the application's performance when handling a large number of courses, we use Redis for caching. This reduces the load on the database by storing frequently accessed data temporarily.

  ### steps
  * Set Up Redis on Azure
    * Create a Redis Cache instance on Azure.
    * Configure necessary settings, including pricing tier and location.
      
  * Install Redis Client in Express Server
      * Run npm install redis to add Redis support.
      * Connect to Redis in the Express application.
        
  * Implement Caching Logic
      * Modify the GET /courses route to first check if data is available in Redis. If found, return the cached data; otherwise, fetch it from MongoDB and store it in Redis with a short expiration time.

  * Set Up Cache Invalidation
      * Clear or update the cache when courses are added, updated, or deleted to ensure data accuracy.
   
  ```
    router.get('/courses', async (req, res) => {
     const cachedCourses = await client.get('courses');
     if (cachedCourses) {
         return res.json(JSON.parse(cachedCourses));
     }
     const courses = await Course.find();
     await client.set('courses', JSON.stringify(courses), { EX: 300 }); // Cache for 5 mins
     res.json(courses);
    });
  ```
    
    

## 2. Load Balancing
   
  To manage high traffic efficiently, requests are distributed across multiple server instances. Using Azure Load Balancer provides a robust way to evenly distribute incoming traffic and prevent any single server from being overwhelmed.

  ### steps
  * Deploy Multiple Server Instances
      * Deploy the backend across multiple Azure App Service instances or Virtual Machines.
        
  * Set Up Azure Load Balancer
      * Add all backend instances to the Load Balancer’s backend pool.
      * Configure health probes to automatically route traffic away from unhealthy instances.
   
  * Define Load Balancing Rules
    * Set rules to distribute HTTP traffic, ensuring all instances are used effectively.
   
   
## 3. High Availability
   To ensure the backend and MongoDB database are always available, especially during disaster scenarios, the following high availability strategies are implemented.

   ### Backend High Availability
   
   * Availability Zones
     * Deploy backend instances across different Availability Zones within the same region to maintain availability if one zone goes down.
       
   * Multi-Region Deployment
     * Deploy backend instances in additional Azure regions for redundancy.
     * Use Azure Traffic Manager to route traffic to the nearest or healthiest region.
       
   * Automated Scaling
     * Configure Azure Autoscale to automatically adjust resources based on demand.

   ### MongoDB High Availability

   *  Cosmos DB with MongoDB API
     * Use Azure Cosmos DB with MongoDB API for managed, highly available MongoDB instances.
     * Enable multi-region replication for data redundancy across Azure regions.

  ### Disaster Recovery
  * Automated Backups
    * Enable geo-redundant backups to a different Azure region using Azure Backup, ensuring data recovery even if a region fails.
      
   

