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

Possible records statuses are:
- **valid**: the record reflects the current choice of the subject and can be used as a proof
- **obsolete**: the record reflects a choice that the subject made earlier, but is no longer correct because a newer record exists
- **expired**: the record reflects a choice that the subject made earlier, but too long ago to be still considered correct *(which means the choice of the subject should be collected again)*
- **irrelevant**: the record cannot be used as a proof because it either references an inactive model serial *(which means the choice of the subject should be collected again)* or has not been committed *(for example, a two-step validation process was started but never completed)*
- **unknown**: the record cannot be used as a proof for other reasons; this status is mostly used internally and should not appear in the backoffice



## Records VS Receipts

Records are atomic objects stored in the **database**; they can be queried through the API and rendered for operators in the backoffice, but also work as constitutive bricks for **receipts**.

These are **files** meant to be either human-readable or processable programmatically and represent the choices submitted by a subject in a given [**context**](/docs/concepts/transactions), at a **certain time**, thus they generally aggregate several records - one per context element.
