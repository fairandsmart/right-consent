# Records

This section will detail the concept and use of records.



## Definition

A **record** represents the **choice** made at a **certain time** by a [**subject**](/docs/concepts/subjects) about an [**element model**](/docs/concepts/models) (processing, preference or condition) which may be accompanied by an **information** model and flagged as concerning a specific **object**.

Its reliability is ensured by:
* an **integrity** flag
* the identifier of the [**transaction**](/docs/concepts/transactions) through which the record has been created
* the **serials** of the **element model version** and the eventual **information model version**, which can be used to re-create the exact form that was shown to the subject
* a database **state**: pending (waiting for confirmation), committed (ready for use), deleted or rolled back (cancelled)
* a **status** which is determined every time the record is queried, based on eventual new records, models changes or expiration
* an **origin** to announce whether the value has been submitted directly by the subject (and by which means), or by an action from an operator or a peer
* an **author** field and a **comment** field which may be used by operators or peers to explain why they submitted new values for the subject



## Status rules

TODO - work in progress



## Records VS Receipts

TODO - work in progress
